# encoding: utf-8

# This script is used to automatically generate
# the examples on index.html based on CSS input
#
# Pipe to new file and copy from vim

source = %Q{letter-spacing: normal;
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: -2px;
}

pangrams = %Q{El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.
El pingüino Wenceslao hizo kilómetros bajo exhaustiva lluvia y frío; añoraba a su querido cachorro.
Jovencillo emponzoñado de whisky: ¡qué figurota exhibe!
Ese libro explica en su epígrafe las hazañas y aventuras de Don Quijote de la Mancha en Kuwait.
Queda gazpacho, fibra, látex, jamón, kiwi y viñas.
Whisky bueno: ¡excitad mi frágil pequeña vejez!
Es extraño mojar queso en la cerveza o probar whisky de garrafa.
}.lines.to_a

selected_pangram = 0

puts "<ul class='examples'>"
source.lines.each do |line|
  puts %Q{  <li>
    <code>#{line.chomp}</code>
    <div>
      <p style='#{line.chomp}'>#{pangrams[selected_pangram].chomp}</p>
    </div>
  </li>}
  selected_pangram += 1
  selected_pangram = selected_pangram % pangrams.length
end
puts "</ul>"
