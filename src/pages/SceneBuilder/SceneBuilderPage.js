import React, { Component } from 'react';
import { ButtonGroup, Button } from 'reactstrap';

import { MONSTER_CONFIG, TILE_CONFIG, TOKEN_CONFIG } from '../../constants';
import * as Action from './actions';
import { Scene } from '../../components/Scene';
import './styles.css';

const defaultScene = { tiles: [] };

class SceneBuilderPage extends Component {
  constructor(props) {
    super(props);
    this.sceneActions = [
      { text: 'Add Tile', color: 'success', fn: this.addTile },
      { text: 'Recalc ViewBox', color: 'success', fn: this.recalcViewBox },
    ];
    this.tileActions = [
      ...this.sceneActions,
      { text: 'Add Token', color: 'info', fn: this.addToken },
      { text: 'Add Monster', color: 'info', fn: this.addMonster },
    ];
    this.tokenActions = [...this.tileActions];
    this.monsterActions = [...this.tileActions];
    this.state = { scene: defaultScene, tileIndex: -1, tokenIndex: -1, monsterIndex: -1, actions: this.sceneActions };
  }

  sceneClick = scene => {
    this.setState({ tileIndex: -1, tokenIndex: -1, monsterIndex: -1, actions: this.sceneActions });
  };

  tileClick = tile => {
    const tileIndex = this.state.scene.tiles.indexOf(tile);
    if (tileIndex < 0) return this.sceneClick();
    this.setState({ tileIndex, tokenIndex: -1, monsterIndex: -1, actions: this.tileActions });
  };

  tokenClick = (tile, token) => {
    const tileIndex = this.state.scene.tiles.indexOf(tile);
    if (tileIndex < 0) return this.sceneClick();
    const tokenIndex = (tile.tokens || []).indexOf(token);
    if (tokenIndex < 0) return this.tileClick(tile);
    this.setState({ tileIndex, tokenIndex, monsterIndex: -1, actions: this.tokenActions });
  };

  monsterClick = (tile, monster) => {
    const tileIndex = this.state.scene.tiles.indexOf(tile);
    if (tileIndex < 0) return this.sceneClick();
    const monsterIndex = (tile.monsters || []).indexOf(monster);
    if (monsterIndex < 0) return this.tileClick(tile);
    this.setState({ tileIndex, monsterIndex, tokenIndex: -1, actions: this.monsterActions });
  };

  keyDown = event => {
    const { code, shiftKey, ctrlKey, altKey } = event.nativeEvent;
    let handled = true;

    const tile = this.curTile(null);
    const token = this.curToken(null);
    const monster = this.curMonster(null);

    const power = Math.pow(10, +shiftKey + +ctrlKey + +altKey);
    switch (code) {
      case 'KeyC':
        if (token && ctrlKey) this.clipboard = { token: { ...token } };
        else if (monster && ctrlKey) this.clipboard = { monster: { ...monster } };
        break;
      case 'KeyV':
        if (this.clipboard && this.clipboard.token && ctrlKey) this.action(Action.addToken, this.clipboard);
        else if (this.clipboard && this.clipboard.monster && ctrlKey) this.action(Action.addMonster, this.clipboard);
        break;
      case 'ArrowUp':
        if (token) this.action(Action.translateToken, { y: -1 * power });
        else if (monster) this.action(Action.translateMonster, { y: -1 * power });
        else if (tile) this.action(Action.translateTile, { y: -1 * power });
        break;
      case 'ArrowDown':
        if (token) this.action(Action.translateToken, { y: 1 * power });
        else if (monster) this.action(Action.translateMonster, { y: 1 * power });
        else if (tile) this.action(Action.translateTile, { y: 1 * power });
        break;
      case 'ArrowLeft':
        if (token) this.action(Action.translateToken, { x: -1 * power });
        else if (monster) this.action(Action.translateMonster, { x: -1 * power });
        else if (tile) this.action(Action.translateTile, { x: -1 * power });
        break;
      case 'ArrowRight':
        if (token) this.action(Action.translateToken, { x: 1 * power });
        else if (monster) this.action(Action.translateMonster, { x: 1 * power });
        else if (tile) this.action(Action.translateTile, { x: 1 * power });
        break;
      case 'PageUp':
        if (token);
        else if (monster);
        else if (tile) this.action(Action.moveTileUp);
        break;
      case 'PageDown':
        if (token);
        else if (monster);
        else if (tile) this.action(Action.moveTileDown);
        break;
      case 'Home':
        if (token);
        else if (monster);
        else if (tile) this.action(Action.moveTileToTop);
        break;
      case 'End':
        if (token);
        else if (monster);
        else if (tile) this.action(Action.moveTileToBottom);
        break;
      case 'Delete':
        if (token) this.action(Action.deleteToken);
        else if (monster) this.action(Action.deleteMonster);
        else if (tile) this.action(Action.deleteTile);
        break;
      case 'Period': // >
        if (token);
        else if (monster);
        else if (tile) {
          const rotate = power === 1 ? 1 : power === 10 ? 10 : power === 100 ? 45 : 90;
          this.action(Action.rotateTile, { rotate });
        }
        break;
      case 'Comma': // <
        if (token);
        else if (monster);
        else if (tile) {
          const rotate = power === 1 ? -1 : power === 10 ? -10 : power === 100 ? -45 : -90;
          this.action(Action.rotateTile, { rotate });
        }
        break;
      default:
        handled = false;
        console.log('keyDown', event.nativeEvent);
        break;
    }

    if (handled) event.preventDefault();
  };

  action = (fn, config) => {
    const { tileIndex, tokenIndex, monsterIndex } = this.state;
    const tile = this.curTile();
    const token = this.curToken();
    const monster = this.curMonster();
    const scene = fn(this.state.scene, { ...this.state, ...config });
    this.setState({
      scene,
      tileIndex: scene.tiles.indexOf(tile) || scene.tiles[tileIndex] ? tileIndex : -1,
      tokenIndex: (tile.tokens || []).indexOf(token) || (tile.tokens || [])[tokenIndex] ? tokenIndex : -1,
      monsterIndex: (tile.monsters || []).indexOf(monster) || (tile.monsters || [])[monsterIndex] ? monsterIndex : -1,
    });
  };
  curTile = (defaultValue = {}) => this.state.scene.tiles[this.state.tileIndex] || defaultValue;
  curToken = (defaultValue = {}) => {
    const tile = this.curTile(null);
    if (!tile || !tile.tokens) return defaultValue;
    return tile.tokens[this.state.tokenIndex] || defaultValue;
  };
  curMonster = (defaultValue = {}) => {
    const tile = this.curTile(null);
    if (!tile || !tile.monsters) return defaultValue;
    return tile.monsters[this.state.monsterIndex] || defaultValue;
  };
  changeTile = () => {
    const tile = prompt('Tile?', this.curTile().tile);
    if (tile) this.action(Action.changeTile, { ...this.state, tile });
  };
  changeToken = () => {
    const token = prompt('Token?', this.curToken().token);
    if (token) this.action(Action.changeToken, { ...this.state, token });
  };
  changeMonster = () => {
    let monster = this.curMonster().monster;
    do {
      monster = prompt('Monster?', monster);
    } while (monster && !MONSTER_CONFIG[monster]);
    if (monster) this.action(Action.changeMonster, { ...this.state, monster });
  };

  addTile = () => this.action(Action.addTile);
  recalcViewBox = () => this.action(Action.recalculateViewBox);
  addToken = () => this.action(Action.addToken, this.state);
  addMonster = () => this.action(Action.addMonster, this.state);

  setScene = () => {
    const json = prompt('Scene?', JSON.stringify(this.state.scene));
    if (json) this.setState({ scene: JSON.parse(json) });
  };

  render() {
    const { scene, actions } = this.state;
    const activeTile = this.curTile(null);
    const activeToken = this.curToken(null);
    const activeMonster = this.curMonster(null);
    console.log(JSON.stringify(scene));

    return (
      <div className="SceneBuilder col-12">
        <h5>Scene Builder</h5>
        <div className="d-flex align-items-start">
          <div>
            <ButtonGroup vertical>
              {actions.map((a, i) => (
                <Button key={i} tag="button" size="sm" color={a.color} onClick={a.fn}>
                  {a.text}
                </Button>
              ))}
            </ButtonGroup>
          </div>
          <div tabIndex="0" onKeyDown={this.keyDown}>
            <Scene
              scene={scene}
              onSceneClick={this.sceneClick}
              onTileClick={this.tileClick}
              onTileDoubleClick={this.changeTile}
              onTokenClick={this.tokenClick}
              onTokenDoubleClick={this.changeToken}
              onMonsterClick={this.monsterClick}
              onMonsterDoubleClick={this.changeMonster}
              activeTile={activeTile}
              activeToken={activeToken}
              activeMonster={activeMonster}
            />
          </div>
        </div>
        <div className="d-flex">
          <input
            type="text"
            value={JSON.stringify(scene)}
            readOnly
            className="flex-fill"
            onDoubleClick={this.setScene}
          />
        </div>
      </div>
    );
  }
}

export default SceneBuilderPage;
