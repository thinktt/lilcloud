*********About************
coded by Tobias Toland 
version 1.058
encryption engine ♞♞ 

Enigma X is based on the German WWII code machine. Since coding Enigma simulators is popular I wanted to do something unique. This is my attempt to make a more secure Enigma using the basic components of the original machine. It was also a way for me to learn JavaScript, and CSS.

Enigma X will take any basic ASCII message and encrypt it to "Think Ding", a special character set made of 26 Unicode symbols. To do this it translates each ASCII character into two Enigma characters (a letter from A-Z) and then pushes them through a randomly configured plugboard and 26 randomly selected and configured Enigma rotors. Each message also has an added random key encoded within itself that is used to send the message again through a second set of 3 rotors so no two encodings will be the same. Finally the message is encoded to "Think Ding".

My basic security ideas are 1. Remove the reflector so any letter can be encoded to itself 2. Increase the size of the key by a bunch (that's a technical term) 3. Add random variability to every message encoded.

To call me an amateur cryptographer would be a great compliment. I have no idea if my "security ideas" are really any good or that I've even implemented them correctly. I also don't know what kind of computer attacks can be mounted on an Enigma style crypto system today, or if my key space is even really large enough to keep simple brute force attacks at bay. All that to say Enigma X is just for fun and education. If anyone has any good ideas for breaking Enigma X I'd love to hear about them.

Enigma X uses SJCL to generate random keys. It does not use JQuery as I'm learning that next. It is published under the MIT licence. This is it's github page. The online Enigma simulators by Louise Dade, Mike Koss and this persons were all very helpful while coding this. Also thanks to all the helpful geeks at stackoverflow for helping me solve my CSS and JavaScript problems and constantly reminding me that everything is easier with JQuery.
*************************
