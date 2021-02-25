@extends('layouts.app')
@section('page')
    <div style="height: 100vh;" class="d-flex align-items-center justify-content-center">
        <div>
            
            <h1 class="text-center nonecase-font mb-0 block error-comment display-2">Página No Encontrada</h1>
            <p class="text-center  mb-5">No pudimos encontrar la página que estabas buscando.</p>
            <div class="row">
                <div class="col-12 text-center">
                    <a href="{{ route('cms.dashboard' )}}" class="btn btn-primary">Ir al Inicio</a>
                </div>
            </div>
        </div>
    </div>
@endsection
