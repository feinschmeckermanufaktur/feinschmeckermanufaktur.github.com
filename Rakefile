require "rubygems"
require "bundler"

Bundler.require :default

desc "run the server"
task "server" do
  sh "bundle exec jekyll --server 9000 --auto"
end

desc "watch all stylesheet files an compile changes"
task "styles:watch" do
  sh "compass watch"
end
