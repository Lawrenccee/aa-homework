require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef") }
  let(:macaron) { Dessert.new("macaron", 25, chef) }

  describe "#initialize" do
    it "sets a type" do
      expect(macaron.type.class).to be(String)
    end

    it "sets a quantity" do
      expect(macaron.quantity).to be(25)
    end

    it "starts ingredients as an empty array" do
      expect(macaron.ingredients.empty?).to be(true)
    end

    it "raises an argument error when given a non-integer quantity" do
      expect do
        Dessert.new("ice cream", "vanilla", chef)
      end.to raise_error(ArgumentError)
    end
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      macaron.add_ingredient("almond flour")
      expect(macaron.ingredients).to include("almond flour")
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      ingredients = ["almond flour", "pistachios", "eggs", "cream", "matcha"]
      ingredients.each { |el| macaron.add_ingredient(el)}

      expect(macaron.ingredients).to eq(ingredients)
      macaron.mix!
      expect(macaron.ingredients).not_to eq(ingredients)
      expect(macaron.ingredients.sort).to eq(ingredients.sort)
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      expect(macaron.eat(5)).to be(20)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect { macaron.eat(100) }.to raise_error("not enough left!")
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      allow(chef).to receive(:titleize).and_return("francois pulpie")
      expect(macaron.serve).to eq("francois pulpie has made 25 macarons!")
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef).to receive(:bake).with(macaron)
      macaron.make_more
    end
  end
end
