class ChangeBandToPokemon < ActiveRecord::Migration[5.1]
  def change
    rename_table :bands, :pokemons
  end
end
