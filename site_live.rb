require 'listen'

listener = Listen.to('.') do |modified, added, removed|
  system('mkdir -p ../WWW/_site_demo');
  system('rsync -r -a -v --delete files ../WWW/_site_demo/files');
  system('rsync -r -a -v --delete _site/* ../WWW/_site_demo');
end
listener.start # not blocking
sleep