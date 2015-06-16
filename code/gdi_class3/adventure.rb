#Write a program in your text editor that uses conditionals and user input to allow the user to play a simple adventure game.
#'gets.chomp' is the value of user input at the command line, with the trailing whitespace chomped off. To do math with it, convert it to an integer with the '.to_i' method

puts 'Lets play a game!'

puts 'You are walking down a hill and look back and see a huge rock coming down the hill towards you, you have three options. . . .'

puts '1 - Take out your iPhone and snapchat it!'
puts '2 - Jump out the way into a bush of thorns. Ouch!'
puts '3 - Dig a hole and hope you make it in enough to jump in.'

input = gets.chomp.to_i

if input == 1
    puts ' You could be dead by the time you finish watching your snapchat but atleast your friends will see how it happened, and of course enjoy your last story! '
elsif input == 2
    puts ' It might hurt and suck you didnt get the video but hey atleast your alive right? '
else input == 3
    puts 'Good luck with that choice!'

end