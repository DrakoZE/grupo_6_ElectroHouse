module.exports = (sequelize,DataTypes) => {
    
    const Category = sequelize.define("Category", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        timestamps: false,
        tablename: "Categories"
    });

    Category.associate = function(models){
        
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "category_id"
        });

    }

    return Category;
}