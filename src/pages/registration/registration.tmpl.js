export const template = `<div class="registration-page">
    <div class="card">
        <div class="wrap_capital-word">
            <h2 class="capital-word">Регистрация</h2>
        </div>
        <form action="" id="form" class="form">
            <div class="input-wrap">
                <input id="email" class="input log" name="email" type="email" value="oleg@mail.ru" autocomplete="off" placeholder=" " />
                <label class="lable logLable" for="email">Почта</label>
            </div>
            <div class="input-wrap">
                <input id="login" class="input log" name="login" type="text" value="Oleg" autocomplete="off" placeholder=" " />
                <label class="lable logLable" for="login">Логин</label>
            </div>
            <div class="input-wrap">
                <input id="name" class="input log" name="first_name" type="text" value="Oleg" autocomplete="off" placeholder=" " />
                <label class="lable logLable" for="name">Имя</label>
            </div>
            <div class="input-wrap">
                <input id="lastName" class="input log" name="second_name" type="text" value="Isaev" autocomplete="off" placeholder=" " />
                <label class="lable logLable" for="lastName">Фамилия</label>
            </div>
            <div class="input-wrap">
                <input id="phone" class="input log" name="phone" type="tel" value="89534653737" autocomplete="off" placeholder=" " />
                <label class="lable logLable" for="phone">Телефон</label>
            </div>
            <div class="input-wrap">
                <input id="password" class="input log" name="password" type="password" value="QWEasd123" autocomplete="off" placeholder=" " />
                <label class="lable logLable" for="password">Пароль</label>
            </div>
            <div class="input-wrap">
                <input id="returnPassword" class="input log" name="repitpassword" type="password" value="QWEasd123" autocomplete="off" placeholder=" " />
                <label class="lable logLable" for="returnPassword">Повторить пароль</label>
            </div>       
            {{{buttonRegist}}}
            {{{buttonLink}}}
        </form>
    </div>
</div>`
