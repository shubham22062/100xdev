import { atom, selector } from "recoil";

export const notification = ({
    key: "networkAtoms",
    default: {
        network: 4,
        jobs: 6,
        messaging: 3,
        notification: 3
    }
    
});


export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const allNotifications = get(notifications);
        return allNotifications.network+
         allNotifications.jobs +
            allNotifications.notifications +
        allNotifications.messaging
        
        
    }
})