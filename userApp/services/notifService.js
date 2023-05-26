// import messaging from '@react-native-firebase/messaging';
// import { Platform } from 'react-native';

// class FCMService {
// 	register = (onRegister, onNotification, onOpenNotification) => {
// 		this.checkPermission(onRegister);
// 		this.createNotificationListners(onRegister, onNotification, onOpenNotification);
// 	};

// 	checkPermission = (onRegister) => {
// 		messaging()
// 			.hasPermission()
// 			.then((enabled) => {
// 				console.info('Permission :::', enabled);
// 				if (enabled === messaging.AuthorizationStatus.AUTHORIZED) {
// 					this.getToken(onRegister);
// 				} else {
// 					this.requestPermission(onRegister);
// 				}
// 			})
// 			.catch((err) => {
// 				console.error('FCM Service : Permission rejected: ', err);
// 			});
// 	};

// 	getToken = (onRegister) => {
// 		messaging()
// 			.getToken()
// 			.then((fcmToken) => {
// 				console.debug('FCM Service : Token: ', Platform.OS, fcmToken);
// 				if (fcmToken) {
// 					onRegister(fcmToken);
// 				} else {
// 					console.debug('FCMService: user doesnot have the fcm token');
// 				}
// 			})
// 			.catch((err) => {
// 				console.error('FCMService: get token rejected: ', err);
// 			});
// 	};

// 	requestPermission = (onRegister) => {
// 		// console.debug('FCM Service : Request Permission');
// 		messaging()
// 			.requestPermission({ sound: false, announcement: true })
// 			.then((res) => {
// 				if (res === 0) {
// 					console.debug('Notification permission denied:', res);
// 				} else {
// 					this.getToken(onRegister);
// 				}
// 			})
// 			.catch((error) => {
// 				console.error('FCMService: request permission rejected: ', error);
// 			});
// 	};

// 	deleteToken = () => {
// 		messaging()
// 			.deleteToken()
// 			.catch((error) => {
// 				console.error('FCMService: delete token rejected: ', error);
// 			});
// 	};

// 	createNotificationListners = (onRegister, onNotification, onOpenNotification) => {
// 		console.debug('Check Message Arrival State');
// 		// When the application is running, but in the background
// 		messaging().onNotificationOpenedApp((remoteMessage) => {
// 			console.debug(
// 				'FCMService: When the application is running, but in the background: ',
// 				JSON.stringify(remoteMessage),
// 			);
// 			if (remoteMessage) {
// 				const notification = remoteMessage.notification;
// 				onOpenNotification(notification);
// 			}
// 		});

// 		// When the application is opened from a quit state
// 		messaging()
// 			.getInitialNotification()
// 			.then((remoteMessage) => {
// 				console.debug(
// 					'FCMService: When the application is opened from a quit state: ',
// 					JSON.stringify(remoteMessage),
// 				);
// 				if (remoteMessage) {
// 					const notification = remoteMessage.notification;
// 					onOpenNotification(notification);
// 				}
// 			});

// 		messaging().setBackgroundMessageHandler(async (remoteMessage) => {
// 			console.debug('Message handled in the background!', remoteMessage);
// 		});

// 		// Foreground state message
// 		// this.messageListener = messaging().onMessage(async (remoteMessage) => {
// 		// 	console.debug('FCMService: A new message arrived: ', JSON.stringify(remoteMessage));
// 		// 	if (remoteMessage) {
// 		// 		let notification = null;
// 		// 		if (Platform.OS === 'ios') {
// 		// 			notification = remoteMessage.data;
// 		// 		} else {
// 		// 			notification = remoteMessage.data;
// 		// 		}
// 		// 		onNotification(notification);
// 		// 	}
// 		// });

// 		// Triggered when have new token
// 		messaging().onTokenRefresh((fcmToken) => {
// 			console.debug('FCMService: refreshed token: ', fcmToken);
// 			if (fcmToken) {
// 				onRegister(fcmToken);
// 			}
// 		});
// 	};

// 	unRegister = () => {
// 		this.messageListener;
// 	};
// }

// export const fcmService = new FCMService();
