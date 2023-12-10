module.exports = (sequelize,DataTypes) => {
    
    const Category = sequelize.define("Category", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false,
        tablename: "Categories"
    });

    Category.associate = function(models){
        
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "categoryId"
        });

    }

    return Category;
}