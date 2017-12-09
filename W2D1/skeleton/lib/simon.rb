class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until @game_over
      take_turn
      system("clear")
    end

    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence

    unless @game_over
      round_success_message
      sleep(0.5)
      @sequence_length += 1 # Why doesnt it work without @ when i have the accessor???
    end
  end

  def show_sequence
    add_random_color
    @seq.each do |color|
      puts color
      sleep(0.5)
      system("clear")
      sleep(0.25)
    end
  end

  def require_sequence
    guesses = []

    until guesses.length === @sequence_length
      print "Enter the next color in the sequence "
      puts "(red, blue, green, yellow)"
      print "> "
      guess = gets.chomp.downcase

      unless COLORS.include?(guess)
        puts "That is not a valid color, please try again"
      else
        guesses << guess

        unless guess == @seq[guesses.length-1]
          @game_over = true
          break
        end

      end
    end
  end

  def add_random_color
    seq << COLORS.sample
  end

  def round_success_message
    puts "Successful turn!"
  end

  def game_over_message
    puts "Sorry game over! Your record was #{@sequence_length}."
  end

  def reset_game
    @sequence_length = 1 # Why doesnt it work without @ when i have the accessor???
    @game_over = false # Why doesnt it work without @ when i have the accesor???
    @seq = [] # Why doesnt it work without @ when i have the accesor???
  end
end

s = Simon.new
s.play
