@extends('layouts.app')
@section('head')
@endsection
@section('page')

<nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
    <div class="container-fluid">
        <button-menu></button-menu>
        <!-- Brand -->
        <a class="navbar-brand" href="{{ route('admin.dashboard') }}">
            <img src="/storage/img/logo-pg.svg" class="align-middle" width="auto" />
        </a>
        <!-- User -->
        <ul class="nav align-items-center d-md-none">
            <li class="nav-item dropdown">
                <b-dropdown id="id_dropdown_navbar" class="nav-link border-0 pr-0" :lazy="true" variant="link" v-cloak>
                    <template slot="button-content">
                        <div class="media align-items-center">
                            <span class="avatar avatar-sm rounded-circle shadow">

                                @if(Auth::user()->avatar)
                                <img src="{{ route('admin.get-file',[ 'folder' => 'img', 'subfolder' => 'users', 'file' => Auth::user()->avatar ]) }}"
                                    alt="User">
                                @else
                                <img src="{{ route('admin.get-file',[ 'folder' => 'img', 'subfolder' => 'users', 'file' => 'avatar.jpg' ]) }}"
                                    alt="User" />
                                @endif

                            </span>
                        </div>
                    </template>
                    <b-dropdown-header class="dropdown-header p-0">
                        <h6 class="text-overflow m-0">Bienvenido!</h6>
                    </b-dropdown-header>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item href="{{ route('admin.profile') }}">
                        <i class="fas fa-user-alt v-align-middle"></i> Mi perfil
                    </b-dropdown-item>
                    <b-dropdown-item href="{{ route('logout') }}"
                        onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                        <i class="fas fa-power-off v-align-middle"></i> Cerrar Sesión
                    </b-dropdown-item>
                </b-dropdown>

            </li>
        </ul>
        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
            {{ csrf_field() }}
        </form>
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
            <!-- Collapse header -->
            <div class="navbar-collapse-header d-md-none">
                <div class="row">
                    <div class="col-6 collapse-brand">
                        <a href="{{ route('admin.dashboard') }}">
                            <img src="/storage/img/logo-pg.svg" class="align-middle" height="70px" width="auto" />
                        </a>
                    </div>
                    <div class="col-6 collapse-close">
                        <button-close></button-close>
                    </div>
                </div>
            </div>
            <ul class="navbar-nav">
                @foreach($menu as $module)
                <li class="nav-item  ">
                    @isset($module["menu_secondary"])
                        <a class="nav-link position-relative d-inline-block w-100 py-3 {{ Request::segment(1) ==  $module["variable"] ? 'active' : ''   }}"
                            v-b-toggle.{{$module["variable"]}}>
                            <i class="text-blue {{$module["icon"]}}"></i>
                            <span class="nav-link__text">{{ $module["name"] }}</span>
                            <span class="arrow"><i class="menu-arrow"> <i class="fas fa-chevron-down"></i> </i></span>
                        </a>
                        <b-collapse id="{{$module["variable"]}}" v-cloak>
                            <ul class="nav flex-column sub-menu">
                                @foreach($module["menu_secondary"] as $submodule)
                                <li class="nav-item">
                                    <a class="nav-link" href="/{{ $submodule["slug"] }}">{{ $submodule["name"] }}</a>
                                </li>
                                @endforeach
                            </ul>
                        </b-collapse>




                        <a class="nav-link position-relative text-center d-inline-block w-100 py-3 nav-link--hover {{ Request::segment(1) ==  $module["variable"] ? 'active' : ''   }}" :id="'popover-{{$module["variable"]}}'">
                            <i class="text-blue {{$module["icon"]}}"></i>
                        </a>
                        <b-popover :target="'popover-{{$module["variable"]}}'" :show="true" custom-class="ml-0 border-0 pl-0" triggers="hover" placement="right" v-cloak>
                                <template v-slot:title>{{ $module["name"] }}</template>
                                <ul class="nav flex-column sub-menu">
                                        @foreach($module["menu_secondary"] as $submodule)
                                            <li class="nav-item">
                                                <a class="nav-link py-1 px-0" href="/{{ $submodule["slug"] }}">{{ $submodule["name"] }}</a>
                                            </li>
                                        @endforeach
                                </ul>
                          </b-popover>



                    @else 
                    <a
                        class="nav-link position-relative d-inline-block w-100 py-3 {{  Request::path() ==  $module["slug"] ? 'active' : '' }}"
                        href="/{{ $module["slug"] }}">
                            <i class="text-blue {{$module["icon"]}}"></i>
                            <span class="nav-link__text">{{ $module["name"] }}</span>
                    </a>

                    <a class="nav-link position-relative text-center d-inline-block w-100 py-3 nav-link--hover {{  Request::path() ==  $module["slug"] ? 'active' : '' }}" :id="'popover-{{$module["slug"]}}'">
                        <i class="text-blue {{$module["icon"]}}"></i>
                    </a>
                    <b-popover :target="'popover-{{$module["slug"]}}'" custom-class="ml-0 border-0 pl-0 pr-5" triggers="hover" placement="right" v-cloak>
                        <a class="nav-link pt-1 px-0" href="/{{ $module["slug"] }}">
                            <span class="link__text">{{ $module["name"] }}</span>
                        </a>
                    </b-popover>
                    @endisset
                </li>
                @endforeach
            </ul>
        </div>
    </div>
</nav>


<div class="main-content" id="main-content">
    <nav class="navbar navbar-top navbar-expand navbar-light position-relative" id="navbar-main">
        <div class="container-fluid">
            <button-icons></button-icons>
            <ul class="navbar-nav align-items-center d-none d-md-flex ml-auto">
                <li class="nav-item">
                    <b-dropdown id="id_dropdown_navbar" class="nav-link border-0 pr-0" :lazy="true" variant="link"
                        v-cloak>
                        <template slot="button-content">
                            <div class="media align-items-center">
                                <span class="avatar avatar-md rounded-circle shadow">
                                    @if(Auth::user()->avatar)
                                    <img src="{{ route('admin.get-file',[ 'folder' => 'img', 'subfolder' => 'users', 'file' => Auth::user()->avatar ]) }}"
                                        alt="Usuario" />
                                    @else
                                    <img src="{{ route('admin.get-file',[ 'folder' => 'img', 'subfolder' => 'users', 'file' => 'avatar.jpg' ]) }}"
                                        alt="Usuario" />
                                    @endif
                                </span>
                                <div class="media-body ml-2">
                                    <span class="mb-0 text-sm font-weight-bold">{{ Auth::user()->full_name }}</span>
                                </div>
                            </div>
                        </template>
                        <b-dropdown-header class="dropdown-header p-0">
                            <h6 class="text-overflow m-0">Bienvenido!</h6>
                        </b-dropdown-header>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item href="{{ route('admin.profile') }}">
                            <i class="fas fa-user-alt v-align-middle"></i> Mi perfil
                        </b-dropdown-item>
                        <b-dropdown-item href="{{ route('logout') }}"
                            onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                            <i class="fas fa-power-off v-align-middle"></i> Cerrar Sesión
                        </b-dropdown-item>
                    </b-dropdown>
                </li>
            </ul>
        </div>
    </nav>
    <div class="content-wrapper">
    @yield('content')
</div>
    <footer class="py-3">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © @php echo date('Y') @endphp <a href="{{ env('APP_URL') }}" target="_blank">PLAY Group</a>. All rights reserved.</span>
                </div>
            </div>
        </div>
    </footer>
</div>
@endsection