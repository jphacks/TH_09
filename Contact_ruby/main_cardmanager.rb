#! /bin/ruby

# main
puts "操作を選んでください"
handle = -1

# Loop
while true
  puts "0:終了"
  puts "1:登録カードの一覧"
  handle = gets.to_i

#Exit
  if handle == 0 then
    exit
#Error Output
  elsif handle != 1
    puts "数値が正しくありません"
#Get All Card Name
  elsif handle == 1
    require './CardNameGet.rb'
  end

  puts " "
end
