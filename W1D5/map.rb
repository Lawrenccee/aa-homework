class Map
  attr_accessor :map

  def initialize
    @map = []
  end

  def assign(key, value)
    if lookup(key)
      remove(key)
    end

    map.push([key, value])
    [key, value]
  end

  def lookup(key)
    map.each { |pair| return pair.last if pair.first == key}
    nil
  end

  def remove(key)
    map.each_with_index do |pair, idx|
      if pair.first == key
        @map = @map[0...idx] + @map[(idx+1)..-1]

        return [pair.first, pair.last]
      end
    end

    return [key, nil]
  end

  def show
    deep_dup(map)
  end

  private
  def deep_dup(arr)
    arr.map { |el| el.is_a?(Array) ? deep_dup(el) : el}
  end
end
