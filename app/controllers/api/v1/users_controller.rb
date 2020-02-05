module Api::V1
  class UsersController < ApiController
    def index
      render_success(User.order(:id))
    end

    def roles
      render_success(User.roles)
    end

    def create
      user = User.new(new_user_params)
      if user.save
        render_success({})
        return
      end
      render_error(user.errors.full_messages.first)
    end

    def show
      user = User.find(params[:id])
      render_success(UserSerializer.new(user))
    end

    def update
      user = User.find(params[:id])
      if user.update(edit_user_params)
        render_success({})
        return
      end
      render_error(user.errors.full_messages.first)
    end

    private
    def new_user_params
      params.permit(:name, :email, :role, :password, :password_confirmation)
    end

    def edit_user_params
      params.permit(:name, :email, :role)
    end
  end
end