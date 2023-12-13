module.exports = (sequelize,DataTypes) => {
    
    const Avatar = sequelize.define("Avatar", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        }
    },
    {
        created_at: "created_at",
        updated_at: "updated_at"
    });

    Avatar.associate = function(models){
        
        Avatar.hasOne(models.User, {
            as: "user",
            foreignKey: "avatarId"
        });

    }

    return Avatar;
}
