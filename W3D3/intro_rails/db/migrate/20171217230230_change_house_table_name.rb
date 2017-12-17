class ChangeHouseTableName < ActiveRecord::Migration[5.1]
  def change
    drop_table :house_tables
    
    create_table :houses do |t|
      t.string :address

      t.timestamps
    end
  end
end
