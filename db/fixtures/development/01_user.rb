10.times do | i |
  User.seed do |user|
    user.id = i
    user.email = "user_#{i}@study_record.com"
  end
end
