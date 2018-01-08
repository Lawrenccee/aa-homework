class PokemonsController < ApplicationController
  before_action :require_user!

  def index
    @pokemons = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find_by(id: params[:id])

    if @pokemon
      render :show
    else
      flash[:errors] ||= []
      flash[:errors] += ["Pokemon could not be found!"]
      redirect_to pokemons_url
    end
  end

  def new
    @pokemon = Pokemon.new

    render :new
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)

    if @pokemon.save
      redirect_to pokemon_url(@pokemon)
    else
      flash.now[:errors] = @pokemon.errors.full_messages
      render :new
    end
  end

  def edit
    @pokemon = Pokemon.find_by(id: params[:id])

    render :edit
  end

  def update
    @pokemon = Pokemon.find_by(id: params[:id])

    if @pokemon.update(pokemon_params)
      redirect_to pokemon_url(@pokemon)
    else
      flash.now[:errors] = @pokemon.errors.full_messages
      render :edit
    end
  end

  def destroy
    @pokemon = Pokemon.find_by(id: params[:id])
    @pokemon.delete

    redirect_to pokemons_url
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:name)
  end
end
