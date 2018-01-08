require 'rails_helper'

RSpec.describe User, type: :model do

  subject(:user) do
    build(:user, email: 'lawrence@lawrence.com', password: 'password')
  end

  it { should validate_length_of(:password).is_at_least(6) }

  it "should validate an email" do
    expect(user.email).to_not be_nil
  end

  it "creates a password digest when given password" do
    expect(user.password_digest).to_not be_nil
  end

  it "creates a session token after initialization" do
    user.valid?
    expect(user.session_token).to_not be_nil
  end

  describe "#is_password?" do
    it "correctly evaluates right password" do
      user.valid?
      expect(user.is_password?('password')).to be true
    end

    it "correctly evaluates wrong password" do
      user.valid?
      expect(user.is_password?('fakepassword')).to be false
    end
  end

  describe "#reset_session_token!" do
    it "should reset the session token" do
      user.valid?
      session_token = user.session_token
      expect(user.reset_session_token!).not_to be(session_token)
    end
  end

  describe "::find_by_credentials" do
    before { user.save! }

    it "should find user by credentials" do
      expect(User.find_by_credentials(
        'lawrence@lawrence.com',
        'password'
        )).to eq(user)
    end

    it "should return nil if not found" do
      expect(User.find_by_credentials(
        'lawrence@lawrence.com',
        'fakce_password'
        )).to eq(nil)
    end
  end
end
