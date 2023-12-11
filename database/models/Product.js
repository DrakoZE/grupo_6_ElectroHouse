module.exports = (sequelize,DataTypes) => {
    
    const Product = sequelize.define("Product", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL(10,2)
        },
        off: {
            type: DataTypes.INTEGER
        },
        stock: {
            type: DataTypes.INTEGER
        },
        tradeMark:{
            type: DataTypes.STRING
        },
        verificated: {
            type: DataTypes.BOOLEAN
        },
        popularity: {
            type: DataTypes.DECIMAL(2,1)
        },
        categoryId: {
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

    Product.associate = function(models){

        Product.belongsTo(models.Category, {
            as: "categories",
            foreignKey: "categoryId"
        });

        Product.belongsTo(models.User, {
            as: "user",
            foreignKey: "userId"
        });

        Product.belongsToMany(models.User, {
            as: "users",
            through: models.Order,
            foreignKey: "product_id",
            otherKey: "user_id"
        });

          Product.belongsToMany(models.Color, {
            as: "colors",
            through: "gamma",
            foreignKey: "product_id",
            otherKey: "color_id",
            timestamps: false
        });

        Product.hasMany(models.Image, {
            as: "images",
            foreignKey: "productId"
        });

    }

    return Product;
}