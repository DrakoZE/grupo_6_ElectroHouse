module.exports = (sequelize,DataTypes) => {
    
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING(25)
        },
        surname: {
            type: DataTypes.STRING(25)
        },
        avatarId: {
            type: DataTypes.INTEGER
        },
        username: {
            type: DataTypes.STRING(15)
        },
        email: {
            type: DataTypes.STRING(50)
        },
        password: {
            type: DataTypes.STRING(200)
        },
        permissionId: {
            type: DataTypes.INTEGER
        },
        sellerId: {
            type: DataTypes.INTEGER
        }
    },
    {
        createdAt: "created_at",
        updatedAt: "updated_at"
    });

    User.associate = function(models){

        User.belongsTo(models.Avatar, {
            as: "avatars",
            foreignKey: "avatarId"
        });

        User.belongsTo(models.Seller, {
            as: "sellers",
            foreignKey: "sellerId",
        });

        User.belongsToMany(models.Product, {
            as: "product",
            through: models.Order,
            foreignKey: "user_id",
            otherKey: "product_id"
        });

        User.hasMany(models.Product, {
            as: "products",
            foreignKey: "userId"
        });
    }

    return User;
}