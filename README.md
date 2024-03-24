<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 2000 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[WebReinvent](https://webreinvent.com/)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Jump24](https://jump24.co.uk)**
- **[Redberry](https://redberry.international/laravel/)**
- **[Active Logic](https://activelogic.com)**
- **[byte5](https://byte5.de)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).





## My Notes

## PROTECTED
protected $table = "table_name"; if model name is different to DB table name, example Model is Flight and DB table name is my_flights
protected $primaryKey = 'key_id'; if primary_key is not default "id"
protected $keyType = 'string'; if primary_key is not int

## PUBLIC
public $incrementing = false; to avoid auto increment
public $timestamps = false; to avoid auto timestamp created_at; updated_at


## USE
if need to use uuid
use Illuminate\Database\Eloquent\Concerns\HasUuids;
class Article extends Model
{
    use HasUuids;
 
    // ...
}

## CONST

const CREATED_AT = 'creation_date';
const UPDATED_AT = 'updated_date';


## STORED PROCEDURE

stored procedure is a query that we can save and recall or use again
stord procedure is helping us to make our code structure more effecient 



## install react-beautiful-dnd

npm i react-beautiful-dnd ant styled-components

## tailwind elements
https://tw-elements.com/docs/standard/navigation/sidenav/


@tailwind base;
@tailwind components;
@tailwind utilities;

/** {
    box-sizing: border-box;
}
html, body, #root, #defaultLayout, #guestLayout {
    min-height: 100vh;
}

h1, h2, h3, h4, h5, h6, p {
    margin: 0;
}

body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: #212121;
    background-color: #f6f6f6;
}

input {
    outline: 0;
    background: #ffffff;
    width: 100%;
    border: 2px solid #e6e6e6;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    transition: all 0.3s;
}

input:focus {
    border-color: #5b08a7;
}

.btn,
.btn-add,
.btn-edit,
.btn-delete {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #5b08a7;
    border: 0;
    text-decoration: none;
    padding: 15px;
    color: #FFFFFF;
    font-size: 16px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
}

.btn-block {
    width: 100%;
}

.btn-add,
.btn-edit,
.btn-delete{
    padding: 0.5rem 0.75rem;
    font-size: 14px;
    border-radius: 4px;
}
.btn-add {
    background-color: #00a762;
}
.btn-delete {
    background-color: #b72424;
}

.btn-logout {
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    color: #212121;
    transition: all 0.3s;
    border-radius: 6px;
}
.btn-logout:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.btn:hover,
.btn:active,
.btn:focus {
    background: #5b08a7;
}

.text-center {
    text-align: center;
}

table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
}

table > thead > tr > th {
    text-align: left;
    padding: 0.5rem 0.5rem;
    background-color: #efefef;
}

table > tbody > tr > td {
    padding: 0.5rem 0.5rem;
    border-bottom: 1px solid #efefef;
    white-space: nowrap;
}

.card {
    background-color: #FFF;
    border-radius: 0.5rem;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    padding: 1.25rem 1.5rem;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
}





.login-signup-form {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-signup-form .form {
    width: 360px;
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    max-width: 360px;
    padding: 34px;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
}

.login-signup-form .title {
    font-size: 20px;
    margin-bottom: 1rem;
    text-align: center;
}

.login-signup-form .form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 16px;
    text-align: center;
}

.login-signup-form .form .message a {
    color: #5b08a7;
    text-decoration: none;
}*/


/*Notification*/
.alert {
    padding: 1rem;
    background-color: #ff4040;
    color: white;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
}

.notification {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 100;
    padding: 1rem 1.5rem;
    background-color: #00a762;
    color: white;
    border-radius: 0.5rem;
}

#defaultLayout {
    display: flex;
}

#defaultLayout aside {
    width: 240px;
    background-color: #007bff;
    padding: 1rem
}

#defaultLayout aside > a {
    display: block;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    color: white;
    text-decoration: none;
    transition: all 0.2s;
}

#defaultLayout aside > a:hover {
    background-color: rgba(0, 0, 0, 0.2);
}

#defaultLayout .content {
    flex: 1;
}

#defaultLayout header {
    height: 80px;
    padding: 2rem 3rem;
    background-color: white;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#defaultLayout main {
    padding: 2rem;
}

.animated {
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

.fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
}



@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
/*
.btn-icon {
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

  .btn-icon-tool {
    background-color: transparent !important;
    color: #adb5bd;
    font-size: .875rem;
    margin: -.75rem 0;
    padding: .25rem .5rem;
  }*/

  .backlog{
    background-color: #6c757d;
  }

  .inreview{
    background-color: #007bff;
  }
  .incomplete{
    background-color: #17a2b8;
  }
  .done{
    background-color: #28a745;
  }

  .row{
    display: flex;
  }
  .col{
    position: relative;
    width: 100%;
    padding-right: 7.5px;
    padding-left: 7.5px;
  }

  .custom-select{display: inline-block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: .375rem 1.75rem .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    vertical-align: middle;
    background: #fff;
    border: 2px solid #e6e6e6;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
