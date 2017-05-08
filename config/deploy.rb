# config valid only for current version of Capistrano
lock "3.7.2"

set :application, "wifriend.io"
set :repo_url, "git@example.com:mcknight0219/#{fetch(:application)}.git"
ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

set :use_sudo, false
set :bundle_binstubs, nil
set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml')
set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system', 'node_modules')

after 'deploy:publishing', 'deploy:restart'

namespace :deploy do 
    task :restart do
        invoke 'puma:smart_restart'
    end
end