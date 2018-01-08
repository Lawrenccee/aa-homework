class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def log_in_user!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !current_user.nil?
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  private

  def require_user!
    unless logged_in?
      flash[:errors] = ["Must be logged in!"]
      redirect_to new_session_url
    end
  end
end