loopy = true

while loopy == true
    puts "Are we having fun yet?"
    puts "Answer 'keep going' or 'quit'."
    user_input = gets.chomp
    if user_input == 'quit'
        loopy = false
    else
        loopy = true
        puts ' we\'re on a roll! '
    end 
end