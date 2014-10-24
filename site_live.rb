require 'listen'

listener = Listen.to('.') do |modified, added, removed|
  system('mkdir -p ../WWW/_site_demo');
  system('rsync -r -a -v --delete files ../WWW/files');
  system('rsync -r -a -v _site/* ../WWW');
end
listener.start # not blocking
sleep
