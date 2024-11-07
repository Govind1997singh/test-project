import React, { useEffect, useState } from 'react';
import ProductDetailView from '../View/ProductDetail';
import { fetchProductById, updateProductField } from '../model';
import { useParams } from 'react-router-dom';

const ProductDetailController = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [editingField, setEditingField] = useState(null);
    const [newDate, setNewDate] = useState('');
    const { id } = useParams();


    useEffect(() => {
        const fetchItem = async () => {
            try {
                const product = await fetchProductById(id);
                setItem(product);
            } catch (error) {
                console.error('Error fetching product:', error);
                setItem(null);
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [id]);

    const handleEditClick = (field) => {
        setEditingField(field);
        setNewDate(item[field]);
    };

    const handleSave = async (field) => {
        if (newDate) {
            try {
                await updateProductField(id, field, newDate);
                setItem((prev) => ({ ...prev, [field]: newDate }));
                setEditingField(null);
            } catch (error) {
                console.error('Error saving changes:', error);
            }
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return <ProductDetailView item={item} editingField={editingField} newDate={newDate} setNewDate={setNewDate} handleEditClick={handleEditClick} handleSave={handleSave} />;
};

export default ProductDetailController;
