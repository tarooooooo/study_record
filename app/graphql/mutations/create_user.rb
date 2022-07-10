module Mutations
  class CreateUser < Mutations::BaseMutation
    argument :params, InputTypes::User, required: true

    field :user, ObjectTypes::User, null: false

    def resolve(params:)
      user = User.create!(params.to_h)

      { user: user }

    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
