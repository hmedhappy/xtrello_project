import notify from './Notifier/Notifier';

export const logout = (history) =>{
    localStorage.removeItem('auth');
    history?.push({
        pathname: "/login",
    });
    notify('A bientot !',1,2500)
}