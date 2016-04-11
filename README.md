## NOTE:
This is not well documented but it will give you an idea on how to start
#### `react-notification-center` [demo](http://diegoddox.github.io/react-notification-center/)

#### Implementation Guide

##### 1: Installation
`npm install --save react-notification-center`

##### 2: Import the less file to your app
`import 'react-notification-center/src/less/index.less'`

##### 3 Add the notification component

before we keep on we need to talk about the notification data structure.

The `notification item component` expect an `id`, `title`, `message`, `read` and `date`, but assuming that in your data you don't have the `message` variable but instead you have `text` as the notification message and you're too lazy to manipulate your data, here is what you can do, use the `mapToItem` `props`

```
import ReactNotificationCenter, {notify} from 'react-notification-center';
export default class App extends Component {
    constructor(props) {
        super(props);
		
		// map those variable with your data structure if necessary
        this.mpaToNotificationItem = {
            id: '_id',
            title: 'title' // name are equal so you don't need. :D
            message: 'text',
            read: 'active',
            date: 'startDate'
        };

        this.notifications = [{
            _id: 1,
            title: 'some title',
            text: 'some long text', // this will be cut on the notification item list
            active: false,
            tags: [{
                type: 'success',
                text: 'text'
            }],
            startDate: '09/12/2016'
        }];
    }

	onNotificationItemClick(item) {
		/* Here you can make a ajax and tell your server
         * that the user has read this notification.
		 */
	}
    
    addMoreData() {
        /* In case you wanna add more data without modifying
         * your react component state you case use the 'notify'
         * method to add more data in to the `react-notification-center` `state`
		 */
         notify.add({...})
    }
    
    render() {
        return (
            <div className="wrapper">
                <div className="your-notification-holder-class">
	             <ReactNotificationCenter
	                 notifications={this.notifications}
	                 onNotificatioOpen={() => console.log('Notification has open')}
	                 onNotificatioClose={() => console.log('Notification has close')}
	                 onItemClick={this.onNotificationItemClick.bind(this)}
	                 mapToItem={this.mpaToNotificationItem}/>
               </div>
            </div>
        );
    }
}
```
That is it :D

#### Data structure.
```
{
    id: 1 // is required,
    title: 'the notification title', // not required
    message: 'My message', // you don't need but what is a notification without a message :D
    read: false, // is required, We will use this for mark which item has been read,
    date: '02/12/2016', // not required
    tags: [{ // not required. This is in case you wanna tell the user the notification purpose
        type: 'info', // types of tags: success, info, warning and danger
        text: 'my tag text'
    }]
}
```


### TODO:
improve the documentation.
