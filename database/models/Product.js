module.exports = (sequelize,DataTypes) => {
    
    const Product = sequelize.define("Product", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        off: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tradeMark:{
            type: DataTypes.STRING,
            allowNull: true
        },
        verificated: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        popularity: {
            type: DataTypes.DECIMAL(2,1),
            allowNull: false
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        sellerId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }        
    },
    {
        createdAt: "created_at",
        updatedAt: "updated_at"
    });

    Product.associate = function(models){

        Product.belongsTo(models.Category, {
            as: "categories",
            foreignKey: "category_id"
        });

        Product.belongsTo(models.User, {
            as: "users",
            foreignKey: "user_id"
        });

        Product.belongsToMany(models.User, {
            through: models.Order,
            foreignKey: "product_id",
            otherKey: "user_id"
        });

          Product.belongsToMany(models.Color, {
            through: "gamma",
            foreignKey: "product_id",
            otherKey: "color_id",
            timestamps: false
        });

        Product.hasMany(models.Image, {
            as: "images",
            foreignKey: "product_id"
        });

    }

    return Product;
}