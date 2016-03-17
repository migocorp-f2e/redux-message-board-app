import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class ListItems extends Component {
    constructor() {
        super();
    }
    _onDel = () => {
        const { onDel, id } = this.props;
        onDel(id);
    }
    _setClassName = () => {
        const { user, curr_user } = this.props;
        return classNames('itemWrap', ((user === curr_user) ? 'is-my-msg' : ''));
    }
    render() {
        const { id, user, message, time } = this.props;
        return (
            <li className={ this._setClassName() }>
                <div className="item-tools">
                    <button className="button del" onClick={this._onDel}>X</button>
                </div>
                <div className="item-id"># {id}
                    <span className="item-user-name">{user}</span> : 
                </div>
                <div className="item-msg">{message}</div>
                <div className="item-time">{time}</div>
            </li>
        );
    };
};

export default ListItems;
