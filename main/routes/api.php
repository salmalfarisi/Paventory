<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
//Use App\Http\Controllers\Api\CRUDController as cruds;
//Use App\Http\Controllers\Api\CRUDController as cruds;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}); */

Route::group(['prefix' => 'account', 'as' => 'Account.'], function () {
	Route::post('login', 'AccountController@login')->name('login');
	Route::post('profile', 'AccountController@updateprofile')->name('updateprofile')->middleware('token');
	Route::put('password', 'AccountController@updatepassword')->name('updatepassword')->middleware('token');
	Route::get('logout', 'AccountController@logout')->name('logout')->middleware('token');
});

Route::group(['prefix' => 'user', 'as' => 'User.', 'middleware' => 'admin'], function () {
	Route::get('index', 'UserController@index')->name('index');
	Route::get('detail/{id}', 'UserController@show')->name('show');
	Route::post('store', 'UserController@store')->name('store');
	Route::patch('destroy/{id}', 'UserController@destroy')->name('destroy');
});

Route::middleware(['token'])->group(function () {

	Route::group(['prefix' => 'history', 'as' => 'History.'],  function () {
		Route::get('index', 'HistoryController@index')->name('index');
		Route::get('detail/{id}', 'HistoryController@show')->name('show');
		//Route::post('store', 'HistoryController@store')->name('store');
	});

	Route::group(['prefix' => 'kategori', 'as' => 'Jenis_kategori.'],  function () {
		Route::get('index', 'Jenis_kategoriController@index')->name('index');
		Route::get('detail/{id}', 'Jenis_kategoriController@show')->name('show');
		Route::post('store', 'Jenis_kategoriController@store')->name('store');
		Route::put('update/{id}', 'Jenis_kategoriController@update')->name('update');
		Route::patch('destroy/{id}', 'Jenis_kategoriController@destroy')->name('destroy');
	});

	Route::group(['prefix' => 'barang', 'as' => 'Barang.'],  function () {
		Route::get('index', 'BarangController@index')->name('index');
		Route::get('detail/{id}', 'BarangController@show')->name('show');
		Route::post('store', 'BarangController@store')->name('store');
		Route::post('update/{id}', 'BarangController@update')->name('update');
		Route::patch('destroy/{id}', 'BarangController@destroy')->name('destroy');
	});

	Route::group(['prefix' => 'customer', 'as' => 'Customer.'],  function () {
		Route::get('index', 'CustomerController@index')->name('index');
		Route::get('detail/{id}', 'CustomerController@show')->name('show');
		Route::post('store', 'CustomerController@store')->name('store');
		Route::put('update/{id}', 'CustomerController@update')->name('update');
		Route::patch('destroy/{id}', 'CustomerController@destroy')->name('destroy');
	});

	Route::group(['prefix' => 'stockitem', 'as' => 'StockItem.'],  function () {
		Route::get('temp/detail/{id}', 'Stock_BarangController@tempshow')->name('tempshow');
		Route::post('temp/store', 'Stock_BarangController@tempstore')->name('tempstore');
		Route::put('temp/update/{id}', 'Stock_BarangController@tempupdate')->name('tempupdate');
	});
	
	Route::group(['prefix' => 'orders', 'as' => 'Orders.'],  function () {
		Route::get('parent/index', 'OrderParentController@index')->name('Pindex');
		Route::post('parent/store', 'OrderParentController@store')->name('Pstore');
		Route::get('parent/detail/{id}', 'OrderParentController@show')->name('Pshow');
		Route::put('parent/update/{id}', 'OrderParentController@update')->name('Pupdate');
		Route::patch('parent/destroy/{id}', 'OrderParentController@destroy')->name('Pdestroy');
		Route::patch('parent/finalize/{id}', 'OrderParentController@update_shipment_status')->name('Pshipment_status');
		
		Route::get('child/index/{parent}', 'OrderChildController@index')->name('Cindex');
		Route::post('child/store/{parent}', 'OrderChildController@store')->name('Cstore');
		Route::get('child/detail/{parent}/{id}', 'OrderChildController@show')->name('Cshow');
		Route::put('child/update/{parent}/{id}', 'OrderChildController@update')->name('Cupdate');
		Route::patch('child/destroy/{parent}/{id}', 'OrderChildController@destroy')->name('Cdestroy');
	});
});

/* 
cara pasang middleware di dalam group
Route::group(['prefix' => 'user', 'as' => 'Account.'],  function () {
    Route::put('profile/{id}', 'UserController@updateprofile')->name('updateprofile');
    Route::post('password', 'UserController@updatepassword')->name('updatepassword');
    Route::get('logout/{id}', 'UserController@logout')->name('logout');
}); */

