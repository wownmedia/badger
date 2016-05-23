const inherits = require('util').inherits
const EventEmitter = require('events').EventEmitter
const Component = require('react').Component
const connect = require('react-redux').connect
const h = require('react-hyperscript')
const getCaretCoordinates = require('textarea-caret')
const Mascot = require('../components/mascot')
const actions = require('../actions')
const CreateVaultScreen = require('./create-vault')
const CreateVaultCompleteScreen = require('./create-vault-complete')

module.exports = connect(mapStateToProps)(InitializeMenuScreen)

inherits(InitializeMenuScreen, Component)
function InitializeMenuScreen() {
  Component.call(this)
  this.animationEventEmitter = new EventEmitter()
}

function mapStateToProps(state) {
  return {
    // state from plugin
    currentView: state.appState.currentView,
  }
}

InitializeMenuScreen.prototype.render = function() {
  var state = this.props

  switch (state.currentView.name) {

    default:
      return this.renderMenu()

  }

}

// InitializeMenuScreen.prototype.componentDidMount = function(){
//   document.getElementById('password-box').focus()
// }

InitializeMenuScreen.prototype.renderMenu = function() {
  var state = this.props
  return (

    h('.initialize-screen.flex-column.flex-center.flex-grow', [

      h(Mascot, {
        animationEventEmitter: this.animationEventEmitter,
      }),

      h('h2.page-subtitle', 'MetaMask'),

      h('button.btn-thin', {
        onClick: this.showCreateVault.bind(this),
      }, 'Create New Vault'),

      h('.flex-row.flex-center.flex-grow', [
        h('hr'),
        h('div', 'OR'),
        h('hr'),
      ]),

      h('button.btn-thin', {
        onClick: this.showRestoreVault.bind(this),
      }, 'Restore Existing Vault'),

    ])

  )
}

// InitializeMenuScreen.prototype.splitWor = function() {
//   this.props.dispatch(actions.showInitializeMenu())
// }

InitializeMenuScreen.prototype.showInitializeMenu = function() {
  this.props.dispatch(actions.showInitializeMenu())
}

InitializeMenuScreen.prototype.showCreateVault = function() {
  this.props.dispatch(actions.showCreateVault())
}

InitializeMenuScreen.prototype.showRestoreVault = function() {
  this.props.dispatch(actions.showRestoreVault())
}
