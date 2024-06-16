export const template = `<main class="back-chat">
        <div class="wrap-back">
            <button class="back" onclick="window.location.href='/messenger'">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" transform='rotate(180)'>
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </main>
    <main class="profile-wrap">
        <div class="profile">
            <form action="" id="form"> 
                <div class="profile-info-user">
                    {{{profileTypeInfo}}}
                </div>
                <div class="profile-editing">
                    {{{buttonProfileEdit}}}
                </div>
            </form>
        </div>
    </main>`;
