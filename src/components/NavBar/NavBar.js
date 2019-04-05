import React from "react";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import ActionHome from "material-ui/svg-icons/action/home";
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import "./NavBar.module.css";

/*const NavBar = () => {
  return <AppBar className="AppBarNav" title="Image Finder" />;
};*/

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    const styles = {
      smallIcon: {
        width: 24,
        height: 24
      },
      small: {
        width: 58,
        height: 58,
        padding: 12
      }
    };
    return (
      <AppBar className="AppBarNav" title="Image Finder">
        <IconButton
          iconStyle={styles.smallIcon}
          style={styles.small}
          onClick={this.handleToggle}
        >
          <ActionHome />
        </IconButton>
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem onClick={this.handleClose}>
            <List>
              <Subheader inset={true}>Folders</Subheader>
              <ListItem
                leftAvatar={<Avatar icon={<FileFolder />} />}
                rightIcon={<ActionInfo />}
                primaryText="Photos"
                secondaryText="Jan 9, 2014"
              />
              <ListItem
                leftAvatar={<Avatar icon={<FileFolder />} />}
                rightIcon={<ActionInfo />}
                primaryText="Recipes"
                secondaryText="Jan 17, 2014"
              />
              <ListItem
                leftAvatar={<Avatar icon={<FileFolder />} />}
                rightIcon={<ActionInfo />}
                primaryText="Work"
                secondaryText="Jan 28, 2014"
              />
            </List>
            <Divider inset={true} />
            <List>
              <Subheader inset={true}>Files</Subheader>
              <ListItem
                leftAvatar={
                  <Avatar
                    icon={<ActionAssignment />}
                    backgroundColor={blue500}
                  />
                }
                rightIcon={<ActionInfo />}
                primaryText="Dogs"
                secondaryText="Jan 20, 2014"
              />
              <ListItem
                leftAvatar={
                  <Avatar
                    icon={<EditorInsertChart />}
                    backgroundColor={yellow600}
                  />
                }
                rightIcon={<ActionInfo />}
                primaryText="Love"
                secondaryText="Jan 10, 2014"
              />
            </List>
          </MenuItem>

        </Drawer>
      </AppBar>
    );
  }
}

export default NavBar;
