import React from 'react';
import Player from './Player';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component {
  render() {
    return <FlipMove maintainContainerHeight={true}>{this.renderPlayers()}</FlipMove>;
  }

  renderPlayers() {
    const players = this.props.players;
    if (players.length === 0) {
      return (
        <div className="item">
          <p className="item__message">Add your first player to get started.</p>
        </div>
      );
    } else {
      return players.map(player => <Player key={player._id} player={player} />);
    }
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};
