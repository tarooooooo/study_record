module Mutations
  class UpdateUser < Mutations::BaseMutation
    argument :id, ID, required: true
    argument :params, InputTypes::User, required: true

    field :user, ObjectTypes::User, null: false

    def resolve(id:, params:)
      user = User.find(id)
      user.update!(params.to_h)

      { user: user }
    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
