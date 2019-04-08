export default class Profile {

    constructor(profile) {
        this.avatar = profile.avatar_url;
        this.username = profile.login;
        this.fullName = profile.name;
        this.bio = profile.bio;
    }

    render(){
        return `
        <div class="profile">
            <div class="profile__photo"><img src="${this.avatar}"></div>
            <div class="profile__description">
                <small class="profile__name">@${this.username}</small>
                <h2 class="profile__full-name">${this.fullName}</h2>
                <small class="profile__bio">${this.bio}</small>
            </div>
        </div>
        `;
    }
}