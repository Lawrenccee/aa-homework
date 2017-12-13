FISH = ['fish', 'fiiish', 'fiiiiish',
  'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

def sluggish_octopus
  longest = nil
  changed = false

  (0...FISH.length).each do |i|
    fish = FISH[i]
    changed = false

    (0...FISH.length).each do |j|
      changed = true if fish.length < FISH[j].length
    end

    longest = fish unless changed
  end

  longest
end

class Array
  def quicksort(&prc)
    return self if self.length < 2

    pivot = self.first
    left = self.drop(1).select { |el| prc.call(el, pivot) < 0 }
    right = self.drop(1).select { |el| prc.call(el, pivot) >= 0 }

    left.quicksort(&prc) + [pivot] + right.quicksort(&prc)
  end
end

def dominant_octopus
  fishes = FISH.quicksort { |x, y| x.length <=> y.length }
  fishes.last
end

def clever_octopus
  longest = FISH[0]

  FISH.each { |fish| longest = fish if fish.length > longest.length }

  longest
end

tiles_array = ["up", "right-up", "right",
  "right-down", "down", "left-down", "left",  "left-up" ]

def slow_dance(direction, tiles_array)
  i = 0
  move_index = nil

  while i < tiles_array.length
    move_index = i if tiles_array[i] == direction

    i += 1
  end

  move_index
end

tiles_hash = {"up" => 0, "right-up" => 1, "right" => 2,
  "right-down" => 3, "down" => 4, "left-down" => 5,
  "left" => 6, "left-up" => 7 }

def constant_dance(direction, tiles_hash)
  tiles_hash[direction]
end
