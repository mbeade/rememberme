
import React from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import DropdownExampleMultipleSearchSelection from '../search/search.component'

class NavBar extends React.Component {

    saludar(){
        console.log('Hola que');
    }
    render() {
        return (
            <div>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation='push' direction='top' visible={true} inverted>
                        <Menu.Item name='home' onClick={this.saludar}>
                            <Icon name='home' />
                            Home
                        </Menu.Item>
                        <Menu.Item name='gamepad' onClick={this.saludar}>
                            <Icon name='gamepad' />
                            Games
                        </Menu.Item>
                        <Menu.Item name='camera'onClick={this.saludar}>
                            <Icon name='camera' />
                            Channels
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic height="100%">
                            <Header as='h3'>My link</Header>
                            <DropdownExampleMultipleSearchSelection />
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}
export default NavBar;