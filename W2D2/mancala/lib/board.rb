class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = Array.new(14)
    place_stones
    @name1 = name1
    @name2 = name2
  end

  def place_stones
    (0...@cups.length).each do |i|
      if i == 6 || i == 13
        @cups[i] = []
      else
        @cups[i] = [:stone] * 4
      end
    end
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" if start_pos < 1 || start_pos > 14
  end

  def make_move(start_pos, current_player_name)
    pos = start_pos
    stones = cups[pos]
    @cups[pos] = []

    i = 1
    until stones.empty?
      pos = (start_pos + i) % cups.length
      i += 1

      next if current_player_name == @name1 && pos == 13
      next if current_player_name == @name2 && pos == 6

      cups[pos] << stones.shift

    end

    render

    next_turn(pos)
  end

  def next_turn(ending_cup_idx)
    return :prompt if ending_cup_idx == 6 || ending_cup_idx == 13
    return ending_cup_idx if @cups[ending_cup_idx].length > 1
    return :switch if @cups[ending_cup_idx].length == 1
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    if (0..5).all? { |num| cups[num].empty? } ||
      (7..12).all? { |num| cups[num].empty? }
      true
    else
      false
    end
  end

  def winner
    return :draw if cups[6].length == cups[13].length
    if cups[6].length > cups[13].length
      @name1
    else
      @name2
    end
  end
end
