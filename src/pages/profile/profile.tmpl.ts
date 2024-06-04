export const template = `<main class="back-chat">
        <div class="wrap-back">
            <button class="back" onclick="window.location.href='/chats'">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" transform='rotate(180)'>
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </main>
    <main class="profile-wrap">
        <div class="profile">
            <div class="profile-photo-name">
                <div class="profile-photo">
                    <div data-popup="avatar" class="change-photo">
                        <button class="change-photo-button">
                            <img data-popup="avatar" class="avatar" src="https://ya-praktikum.tech/api/v2/resources/{{avatar}}" />
                        </button>
                    </div>                           
                </div>
                <div class="profile-name">
                    <h3>{{login}}</h3>
                </div>
            </div>
            <div class="profile-info-user">
                {{{profileInfo}}}
            </div>
            <div class="profile-editing">
                {{{buttonProfile}}}
            </div>
        </div>
    </main>
    {{{popup}}}`;
