require "lru"
require "rspec"

describe "LRUCache" do
  subject(:lru) { LRUCache.new(5) }

  describe "#initialize" do
    it "sets cache to an empty array" do
      expect(lru.cache).to be_empty
    end

    it "sets size to be 5" do
      expect(lru.size).to eq(5)
    end
  end

  describe "#count" do
    it "return number of elements in the cache" do
      lru.add(5)
      lru.add(4)
      expect(lru.count).to eq(2)
    end

    it "does not hold mode elements than size" do
      lru.add(5)
      lru.add(4)
      lru.add(3)
      lru.add(2)
      lru.add(1)
      lru.add(0)
      expect(lru.count).to eq(lru.size)
    end
  end

  describe "#add" do
    it "adds an element to the cache" do
      lru.add(5)
      expect(lru.cache).to include(5)
    end

    it "doesn't add an element in the cache again" do
      lru.add(5)
      lru.add(5)
      expect(lru.cache.count(5)).to eq(1)
    end

    it "moves an element to the end if added but already in the cache" do
      lru.add(5)
      lru.add(4)
      lru.add(3)
      lru.add(2)
      lru.add(1)
      lru.add(5)
      expect(lru.cache[-1]).to eq(5)
    end

    it "never grows past size" do
      lru.add(5)
      lru.add(4)
      lru.add(3)
      lru.add(2)
      lru.add(1)
      lru.add(165)
      expect(lru.count).to eq(5)
    end

    it "deletes least recently used element when no room adding new" do
      lru.add(5)
      lru.add(4)
      lru.add(3)
      lru.add(2)
      lru.add(1)
      lru.add(165)
      expect(lru.cache[0]).to_not eq(5)
      expect(lru.cache[-1]).to eq(165)
    end
  end
end
