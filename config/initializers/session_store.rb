# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_culturecode_session',
  :secret      => '5134d16797d7aad982eb3b07e25d9170c5e5818aa9b4422a87c62ae5b6e4b9a1d16709f58eaa37148778d5ce32e66a7461f91b3efc195b69e4cde5c506a0215d'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
