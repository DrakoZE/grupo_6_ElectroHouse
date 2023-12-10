module.exports = (sequelize,DataTypes) => {
    
    const Color = sequelize.define("Color", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        color: {
            type: DataTypes.STRING(25)
        },
        code: {
            type: DataTypes.STRING(10)
        }
    },
    {
        timestamps: false
    });

    Color.associate = function(models){
        
        Color.belongsToMany(models.Product, {
            as: "products",
            through: "gamma",
            foreignKey: "color_id",
            otherKey: "product_id",
            timestamps: false
        });

    }

    return Color;
}