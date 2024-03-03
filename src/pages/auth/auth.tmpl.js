export const template = `
    <div class="auth-page">
        <div class="card">
            <div class="wrap-capital-word">
                <h2 class="capital-word">Вход</h2>
            </div>
            <form action="" id="form" class="form">
                <div class="input-wrap">
                    <input id="login" class="input log" name="login" type="text" value="Oleg" autocomplete="off" placeholder=" "  />
                    <label class="lable log-lable" for="login">Логин</label>
                </div>
                <div class="input-wrap">
                    <input id="password" class="input log" name="password" type="password" value="QWEasd123" autocomplete="off" placeholder=" " />
                    <label class="lable log-lable" for="password">Пароль</label>
                </div>                
                {{{buttonAuth}}}
                {{{buttonLink}}}
            </form>
        </div>
    </div>
`

